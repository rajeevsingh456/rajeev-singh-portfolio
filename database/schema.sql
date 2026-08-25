CREATE TABLE IF NOT EXISTS profiles (id SERIAL PRIMARY KEY, name VARCHAR(120) NOT NULL, title VARCHAR(200), location VARCHAR(120), experience_years VARCHAR(50), summary TEXT);
CREATE TABLE IF NOT EXISTS skills (id SERIAL PRIMARY KEY, name VARCHAR(120) NOT NULL, level VARCHAR(50));
CREATE TABLE IF NOT EXISTS projects (id SERIAL PRIMARY KEY, title VARCHAR(200) NOT NULL, type VARCHAR(120), description TEXT);
CREATE TABLE IF NOT EXISTS project_skills (project_id INT REFERENCES projects(id) ON DELETE CASCADE, skill_id INT REFERENCES skills(id) ON DELETE CASCADE, PRIMARY KEY(project_id, skill_id));
CREATE TABLE IF NOT EXISTS contacts (id SERIAL PRIMARY KEY, name VARCHAR(120) NOT NULL, email VARCHAR(200) NOT NULL, message TEXT NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
INSERT INTO profiles(name,title,location,experience_years,summary) VALUES ('Rajeev Singh','Software Engineer | QA Automation | Full-Stack Automation','India','Update exact total years','Software engineering and QA automation profile focused on reliable test automation, APIs, databases and CI/CD.');
