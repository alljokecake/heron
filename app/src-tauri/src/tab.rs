use std::path::PathBuf;
use dirs;
use serde::Deserialize;

#[derive(Deserialize)]
pub struct Tab {
    pub uuid: u128,
    pub icon: String,
    pub path: Option<PathBuf>,
    pub label: String,
    pub custom: bool,
}

// Known Folders
impl Tab {
    fn desktop() { todo!() }

    fn documents() -> Self {
        Self {
            uuid: todo!(),
            icon: "document.svg".to_string(),
            path: dirs::document_dir(),
            label: "Documents".to_string(),
            custom: false,
        }
    }
}

// Custom Tabs
impl Tab {
    fn settings() -> Self {
        Self {
            uuid: 0,
            icon: "settings.svg".to_string(), // How to handle non-img icons?
            path: None,
            label: "Settings".to_string(),
            custom: true,
        }
    }
}

impl Default for Tab {
    // Read user-config.toml for the default tab component.
    // By default it's set to Documents.
    fn default() -> Self {
        //
        // Return Documents for now.
        //
        Self::documents()
    }
}
