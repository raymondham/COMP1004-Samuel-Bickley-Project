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

Cloud Vault is a SPA personal file management system that allows for the storage, modification and uploading of files on a browser interface, and imitates elements of a usual cloud storage platform, without a backend server. Cloud Vault stores metadata locally in the users browser with JSON and local Storage API instead of relying on external server side applications.

The target audience for Cloud Vault are mainly students, freelancers and users who are in need of simply storing data locally without internet connections or cloud software's.  This software may be used to store small files like notes and coursework, or for the privacy advancements it offers as the users data is stored locally on their browser. 

Compared to existing software's, Cloud Vault offers superior flexibility and privacy, as the software does not require internet nor needs the user to create an account, which is beneficial as users may worry about issues like data breaches (when stored online), and websites taking personal data when asked to create an account.

Unlike other cloud software's, this system does not use overcomplicated UI's or menus and only provides users with must have features and simple optional components like uploads, categorizing, tags and searching. No other overwhelming features will be displayed.
Cloud Vault will visualize metadata such as 'number of files per category/ tag', 'upload activity' and 'stored file types', this data does not require a backend so, using Vanilla JS and Canvas, this can be generated and displayed. It will also feature optional dashboard views to visualize stored metadata to better organise the users files. The visualisation will be generated dynamically from local JSON data.
Technologies used in Cloud Vault will include; UI/ Front end ( HTML5, CSS3 and JavaScript), Modular JavaScript files for file manager and storage service, local storage API that is built into the browser, JSON (data formatting) and chart.js for visuals.





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




CREATE WATERFALL TO SHOW YOUR PLAN OF PROJECT and upload on eportfolio Upload a document that outlines how your project will develop over the course of the year. Use the waterfall model to illustrate your planned activities for each sprint.

                                          PhaseDuration	   Start	        End  
Requirements Analysis	                        3 weeks	   Oct 1         Oct 21
System Design	                                 3 weeks	   Oct 22	     Nov 10
Implementation	                                 6 weeks	   Nov 11	     Dec 22
Testing	                                       3 weeks	   Jan 5	        Jan 26
Deployment	                                    1 week	   Jan 27	     Feb 2
Reflection & Report	                           2 weeks   	Feb 3	        Feb 17


Install VS code, use node.js if you plan to modularize your javascript, include bootstrap for ui styling, initialize a github repositoroy for version control - name it COMP1004_CloudVault_SamuelBickley



System Design (3 weeks – Oct 22 to Nov 10)
🎯 Objectives
Translate requirements into a technical blueprint.
Define the system’s architecture, database, and user interface.
Ensure design supports scalability and security.

🧩 Tasks
Choose your tech stack (HTML, CSS, JavaScript, Node.js, Express.js, MongoDB/Firebase).
Design the system architecture diagram (client-server-cloud).
Create the Entity-Relationship Diagram (ERD) for your database.
Make wireframes or mockups for the front-end (login, dashboard, upload page).
Plan APIs (endpoints for user authentication, file upload/download).
Define security approach (JWT authentication, HTTPS, validation).

📦 Deliverables
System Design Document (SDD)
Architecture Diagram
UML Class & Sequence Diagrams
ERD (Database Schema)
Wireframes/UI Mockups
API Documentation (OpenAPI or table format)

📝 Notes
Design is a major assessment point — it shows planning before coding.
Include visuals (draw.io, Lucidchart, or Figma screenshots) to strengthen your ePortfolio.










Nov 11th to Dec 22nd 
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





