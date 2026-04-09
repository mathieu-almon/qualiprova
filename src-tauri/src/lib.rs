use serde::{Serialize, Deserialize};
use std::fs::File;
use std::io::{Read, Write};
use yaml_rust::{YamlLoader, YamlEmitter};

#[derive(Debug, Serialize, Deserialize)]
struct TestSuite {
    pub name: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct TestPlan {
    pub name: String,
    pub description: String,
    pub test_suites: Vec<TestSuite>,
}

#[derive(Debug, Serialize, Deserialize)]
struct ErrorResponse {
    message: String,
}

#[tauri::command]
fn export_test_plan(test_plan: TestPlan, file_path: &str) -> Result<(), ErrorResponse> {
    let yaml_content = serde_yaml::to_string(&test_plan)
        .map_err(|e| ErrorResponse { message: e.to_string() })?;
    let mut file = File::create(file_path)
        .map_err(|e| ErrorResponse { message: e.to_string() })?;
    file.write_all(yaml_content.as_bytes())
        .map_err(|e| ErrorResponse { message: e.to_string() })?;
    Ok(())
}

#[tauri::command]
fn import_test_plan(file_path: &str) -> Result<TestPlan, ErrorResponse> {
    let mut file = File::open(file_path)
        .map_err(|e| ErrorResponse { message: e.to_string() })?;
    let mut yaml_content = String::new();
    file.read_to_string(&mut yaml_content)
        .map_err(|e| ErrorResponse { message: e.to_string() })?;
    let test_plan: TestPlan = serde_yaml::from_str(&yaml_content)
        .map_err(|e| ErrorResponse { message: e.to_string() })?;
    Ok(test_plan)
}
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, export_test_plan, import_test_plan])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
