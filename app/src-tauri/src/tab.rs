use std::path::PathBuf;
use dirs;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Deserialize, Serialize, Clone, Debug)]
pub struct Tab {
    pub uuid: u128,
    pub icon: String,
    pub path: Option<PathBuf>,
    pub label: String,
    pub custom: bool,
}

// TODO:
// pub enum Icon {
//     Svg(String),
//     Lucide(String),
// }


// Known Folders
impl Tab {

    fn documents() -> Self {
        Self {
            uuid: Uuid::new_v4().as_u128(),
            icon: "documents.svg".to_string(),
            path: dirs::document_dir(),
            label: "Documents".to_string(),
            custom: false,
        }
    }

    pub fn downloads() -> Self {
        Self {
            uuid: Uuid::new_v4().as_u128(),
            icon: "downloads.svg".to_string(),
            path: dirs::download_dir(),
            label: "downloads".to_string(),
            custom: false,
        }
    }

    pub fn desktop() -> Self {
        Self {
            uuid: Uuid::new_v4().as_u128(),
            icon: "desktop.svg".to_string(),
            path: dirs::desktop_dir(),
            label: "Desktop".to_string(),
            custom: false,
        }
    }
}

// Custom Tabs
impl Tab {
    pub fn settings() -> Self {
        Self {
            uuid: 1,
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
