# Awesome Books - Live Coding Project

This project is designed to support the technical portion of interviews.

Recruiters use this project during the hiring process for developers. The candidate is tasked with implementing new features or improving existing functionality during a live coding session. The project is structured to simulate real-world tasks and provide an opportunity for the candidate to demonstrate their skills in practice.

## Requirements
- [ ] Fetch current user from API endpoint and retrieve all his favorite books based on his `id`. 
- [ ] Render those books into a native HTML table. Table will contain those columns: `Title`, `Author`, `Date of release` and `Id of the publishing company`. 
- [ ] For column `Date of release` use Czech date format.
- [ ] Set light gray background for every even row in the rendered table. Use a Tailwind class for setting the color of the background. 
- [ ] Fetch Publishing companies from API endpoint and assign a Publishing company name for each book listed in the table instead of showing the id of the publishing company.
- [ ] Show only books released after year 1990
- [ ] Set Authorization header for every performed request from the app. Set the token retrieved from dummy endpoint as a value of this header.

## Note
This project points to dummy API endpoints and some of those actions are simplified in order to make the process of live coding faster.
