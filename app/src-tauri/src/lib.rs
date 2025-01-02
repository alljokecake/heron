// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#![allow(unused)]

use std::collections::HashMap;

mod tab;
use tab::Tab;

// TODO: Introduce lifetimes
struct App {
    tabs: HashMap<u128, Tab>,
    order: Vec<u128>,
    active_tab: u128,
}

impl App {
    // Create app with the default tab.
    fn new() -> Self {
        let mut app = Self {
            tabs: HashMap::new(),
            order: Vec::new(),
            active_tab: 0,
        };

        app.add_tab(Tab::default());

        return app;
    }

    fn add_tab(&mut self, tab: Tab) {
        //
        // FIXME: Introduce lifetimes!!!
        //
        let mut id = tab.uuid.clone(); 

        self.tabs.insert(tab.uuid, tab);
        self.active_tab = id;
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
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
