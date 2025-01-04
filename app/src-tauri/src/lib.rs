#![allow(unused)]

use std::collections::HashMap;
use std::sync::Mutex;

mod tab;
use tab::Tab;

struct App {
    tabs: HashMap<u128, Tab>,
    order: Vec<u128>,
    active_tab: u128,
}

impl App {
    fn new() -> Self {
        let mut app = Self {
            tabs: HashMap::new(),
            order: Vec::new(),
            active_tab: 0,
        };

        app.add_tab(Tab::default());
        // @remove
        app.add_tab(Tab::desktop());

        // @remove
        dbg!(app.get_tabs());
        //

        return app;
    }

    fn add_tab(&mut self, tab: Tab) -> u128 {

        // @remove
        println!("Adding tab:\n{:#?}\n", &tab);
        //

        let mut id = tab.uuid.clone(); 

        self.tabs.insert(tab.uuid, tab);
        self.order.push(id);
        self.active_tab = id;

        // @remove
        println!("Active tab: {}", self.get_active_tab());
        //

        return id;
    }

    fn close_tab(&mut self, uuid: u128) {
        self.tabs.remove(&uuid);

        // Find the index of the closing tab in the vector
        if let Some(index) = self.order.iter().position(|&id| id == uuid) {
            // Remove the closing tab from the order vector
            self.order.remove(index);

            // Check if the closing tab is the active tab
            if self.active_tab == uuid {
                // If there are remaining tabs, set the active tab to the one
                // behind or in front
                if !self.order.is_empty() {
                    self.active_tab = if index > 0 {
                        self.order[index -1 ]
                    } else {
                        // FIXME: Seems sketchy
                        self.order[0]
                    };
                } else {
                    // TODO: Handle closing
                    // No tabs left, close the app
                    self.active_tab = 0;
                }
            }
        }
    }

    fn set_active_tab(&mut self, uuid: u128) {
        self.active_tab = uuid;
    }

    fn get_active_tab(&self) -> u128 {
        self.active_tab
    }

    fn get_tabs(&self) -> Vec<Tab> {
        self.order.iter().map(|uuid| self.tabs[uuid].clone()).collect()
    }

    fn default_tab(&self) -> Tab {
        Tab::default()
    }

}

#[tauri::command]
fn add_tab(app: tauri::State<Mutex<App>>, tab: Tab) -> u128 {
    let mut app = app.lock().unwrap();
    app.add_tab(tab)
}

#[tauri::command]
fn close_tab(app: tauri::State<Mutex<App>>, uuid: u128) {
    let mut app = app.lock().unwrap();
    app.close_tab(uuid);
}

#[tauri::command]
fn get_active_tab(app: tauri::State<Mutex<App>>) -> u128 {
    let app = app.lock().unwrap();
    app.get_active_tab()
}

#[tauri::command]
fn get_tabs(app: tauri::State<Mutex<App>>) -> Vec<Tab> {
    let app = app.lock().unwrap();
    app.get_tabs()
}

#[tauri::command]
fn get_default_tab(app: tauri::State<Mutex<App>>) -> Tab {
    let app = app.lock().unwrap();
    app.default_tab()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .manage(Mutex::new(App::new()))
        .invoke_handler(tauri::generate_handler![
            add_tab,
            close_tab,
            get_active_tab,
            get_tabs,
            get_default_tab,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
