# COMP1004-Samuel-Bickley-Project
Project Name: CloudVault - A Personal Cloud File Manager (client side SPA) 
Focus: Software Engineering & Cloud Engineering 

Project Vision 

Cloud Vault is an SPA personal file management system that allows for storage, modification and uploading of files on a local browser interface without a backend server and stores metadata locally with JSON and local Storage API instead of external server side applications.

This system stores file metadata (filename, type, size, and timestamps) in JSON format within the browser's local storage instead of utilising remote cloud storage.
Cloud Vault aims to replicate popular Cloud file managers such as OneDrive, but through the users device instead of a remote server, focusing more on UI interaction design and structured data handling without the need for a backend server, so no connection, or account is required to use this service. 

Following the modular software enginering principles, CloudVault will handle UI, file data logic and local storage.

The target audience for Cloud Vault are mainly freelancers and users who are need to store data locally without internet connections.  This software may be used to store small files like notes, or for the privacy advancements it offers as the users data is stored personally on their browser.

Compared to existing software's, Cloud Vault offers superior flexibility and privacy, as the software does not require internet nor needs the user to create an account, which is beneficial as users may worry about data breaches (when stored online), and websites taking personal data when asked to create an account.

Unlike other cloud software's, this system does not use overcomplicated UI's and only provides users with must have features and simple optional components like uploads, categorizing, tags and searching. No other overwhelming features are displayed.


Technologies used in Cloud Vault will include;
-UI/ Front end ( HTML5, CSS3 and Vanilla JavaScript)
-Modular JavaScript files for file manager 
-local storage API as storage
-JSON for visuals
-fileReader API
Drag and Drop API


Functional Requirements
1. User must be able to upload files, with each file's metadata stored in JSON format.
2. User must be able to create, edit and assign categories and tags to these files.
3. System must display a searchable and filterable list of stored files.
4. System must persist all data using browser localStorage.
   
Non Functional Requirments
1. Application must use a modular architecture with separation between UI, Logic, and storage.
2. Interface must be easy to navigate and be well responsive.


Risk                                                Impact                                                 Solution  

Local storage limit of 5-10mb          Larger files may not be supported           Live storage displayed to user.Indexed DB migration in the future. 

No encryption on data                  Readable plain text of data                 Future fix: Web Crypto API encryption      

XSS vulnerability via local Storage    Data exposure to harmful scripts             Future fix: Content security policy headers and warnings, indexed DB migration 

Cleared browser data                   Files permanently lost                       Export/backup function 

Folder edit bug                        Folders cannot be renamed or edited           Known bug found during testing/to be fixed in future versions 

No accessibility support               Isolates some users                           Adhere to WCAG regulations 

Base64 encoding overhead               33% more storage than actual size of file     Migration to indexed DB would be preferable, however, this limitation was acknowledged 




File Structure

- index.html -UI and entry point
- app.js - controller, handles UI events
- fileManager.js - file rendering
- storageService.js -all localStorage read/write operations
- style.css - application styling

To run Cloud Vault, simply open the index.html attached on any modern browser. No extra installations or account creation needed.

Samuel Bickley 
COMP1004 
Cloud Vault
University of Plymouth












