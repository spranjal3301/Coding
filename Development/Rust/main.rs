fn main(){
    println!("Here we go!");
}
//`` Run the program with rustc
//-$ rustc main.rs
//-$ ./main

//`Formatting
//-$ rustfmt main.rs

//*  Running the program  with fn!() is a macro not a fn() 

//`Cargo : Rust's build system and package manager
// setup a new project with cargo
//-$ cargo new <project_name>
//-$ cd <project_name>

//-$ cargo build //Build the project for development
//-$ cargo build --release //Build the project for deployment

//-$ ./target/debug/<project_name>  //manually run the executable
//-$ cargo run //Compile and run the executable with cargo
//-$ cargo check //Check the code for errors without building it

//* In rust Package is called a crate