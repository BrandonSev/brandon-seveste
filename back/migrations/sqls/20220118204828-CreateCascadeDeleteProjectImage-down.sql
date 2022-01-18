ALTER TABLE images DROP CONSTRAINT fk_project_id;
ALTER TABLE images ADD CONSTRAINT fk_project_id FOREIGN KEY (project_id) REFERENCES project(id);
