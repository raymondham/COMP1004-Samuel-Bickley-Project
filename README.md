# COMP1004-Samuel-Bickley-Project
Project Name: CloudVault - A Personal Cloud File Manager (client side SPA) 
Focus: Software Engineering & Cloud Engineering 

Stand up meeting leader = Muhammad Asad


Project Vision 

CloudVault is a single page application (SPA) that allows users to upload, organize, and manage personal files using a browser-based interface. Users can group files into categories, assign tags, and view synchronisation logs that indicate when files were last added or used.
This system stores file metadata (filename, type, size, and timestamps) in JSON format within the browser's local storage instead of utilising remote cloud storage.
Cloud Vault aims to replicate popular Cloud file managers such as OneDrive, but throguh the users device instead of a remote server, focusing more on UI interaction design and structured data handling without the need for a backend server.
Following the modular software enginering principles, CloudVault will handle UI, file data logic and local storage using various elements.


Project Scope (250 words) 
Cloud Vault is a SPA personal file management system that allows for the storage, modification and uploading of files on a browser interface, and immitates elements of a usual cloud storage platform, without needing a backend server. Cloud Vault stores metadata locally in the users browser by utlizing JSON and localStorage API instead of relying on external server side applications and data.

The target audience for Cloud Vault are mainly students, freelancers and users who are in need of storing data locally using simple, effective organization without interent connections or cloud softwares. The audience of Cloud Vault may want to use this software if they want to store small files like notes and coursework, or they may want to use it for the privacy advancments as the users data is stored locally on their browser. Cloudvault may also be advantagous to those without stable internet connection as the software may be used offline.

Users may want to use CloudVault as opposed to other existing solutions as it offers more flexibility due to CloudVault not neesing internet, aswell as not needing the user to create an account. This is an attractive feature, especially when it comes to data storage, as users may worry about issues like data breaches (when stored online), and websites taking data like emails, passwords and personal information when asked to create an account.
   
Cloud Vault is also an advantage over cloud softwares as it doesnt have overcomplicated UI's or complex menus - Cloud Vault only provides users with must have features and simple optional features like uploads, catergorizing, tags and searching - no other overwhelming features will be displayed.

Cloud Vault will use visualizations to display data. Due to CloudVault only storing metadata, things like number of files per category, number of files per tag,, upload activity over time and file types stored can be displayed as they dont require a backend and are genreated using Vanilla JS + Canvas. Cloud Vault will aslo feature optional dashboard views to visualize this stored metadata to provide insight into how the user can organise information. The visualisation will be generated dynamically from local JSON data.

Technolgies used in CloudVault will include; UI/ Front end ( HTML5, CSS3 and JavaScript), Modular Javascript files for filemanager and storageservice, local storage API that is built into the browser, JSON (data formatting) and chart.js for visuals.
 
393 words!!!!
  





1 What problem are you solving with CloudBox?
2 Who is your target user (students, professionals, general public)?
3. Why would they use your application instead of existing solutions?
4. What are the must-have features for version 1? (e.g., uploading files, viewing files,. saving JSON)
5. Are there any optional features you want to include if you have time? (e.g., tagging, filtering, categories)
6.Will your app visualize data (like showing last synced time, file type counts)?
7.Which technologies will you use? (HTML, CSS/Bootstrap, JavaScript, Node.js for JSON handling)
8.How will you store data? (local storage, JSON files) DONE
9.Will your app be a Single Page Application (SPA)? DONE
10.How will your project help users manage their time or files more effectively? DONE

11.What’s the main outcome you want someone to achieve after using it?
12.What could go wrong technically? (e.g., JSON errors, UI issues)
13.Are there user experience risks? (e.g., hard to navigate, confusing interface)



Functional Requiremnts
1. User must be able to upload files, with each file's metadata stored in JSON format.
2. User must be able to create, edit and assign catergories and tages to these files.
3. System must display a searchable and filterable list of stored files.
4. System must persist all data using browser localStorage, even after the browser is closed.
Non Functional Requirments
1. Application must use a modular architecture with separation between UI, Logic, and storage.
2. Interface must be easy to navigate and be well responsive.
CHECK FOR PLAGIRISM!!!!

Risks and Mitigations 
1.
2.



Fill out project initiation section on Eportfolio




CREATE WATERFALL TO SHOW YOUR PLAN OF PROJECT and upload on eportfolio Upload a document that outlines how your project will develop over the course of the year. Use the waterfall model to illustrate your planned activities for each sprint.



Install VS code, use node.js if you plan to modularize your javascript, include bootstrap for ui styling, initialize a github repositoroy for version control - name it COMP1004_CloudVault_SamuelBickley













WHATS LEFT TO BE DONE 


Nov/Dec
3.
Break your project into sprints, each with achievable goals:

Sprint 1: Set up basic SPA with file list view and upload functionality.

Sprint 2: Add JSON read/write for file metadata.

Sprint 3: Add tags, search, and sort features.

Sprint 4: Add last-synced tracking, optional dashboard, and alerts.

Sprint 5: Polish UI, test for edge cases, write UML diagrams, prepare ePortfolio video.

Create a backlog in a planner (e.g., Microsoft Planner or Trello) to track tasks.



4.
HTML: File upload interface, table/grid for files.

CSS/Bootstrap: Layout, responsive design.

JavaScript:

Read/write JSON to local storage.

Handle file upload, tagging, searching, sorting.

Track time/metadata for each file.

Keep the prototype moderately complex, enough to show progress in your mid-project video.



5. Overall Plan 
Start your ePortfolio immediately. Include:

Project Initiation (title, vision, scope, requirements)

Project Plan (sprints/backlog)

Risks & mitigation

Every code iteration → commit to GitHub and include comments.



6. VIDEO
Prepare a 5-minute video showing:

Project vision & background

Project plan & sprint progress

UML diagrams (start with basic class or flow diagrams)

Working prototype demonstration

Challenges/issues faced


Write a 250-word CPD reflection on how any learning (like tutorials, sessions, or online resources) influenced your project approach.




Jan-April
7.
Finish coding all features.

Produce final UML diagrams.

Write 3,000-word report, including 500-word reflection on challenges.

Make poster summarizing CloudBox.

Prepare for viva: run your SPA, explain code, discuss SDLC.





