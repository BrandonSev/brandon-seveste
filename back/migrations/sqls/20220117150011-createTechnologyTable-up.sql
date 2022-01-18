CREATE TABLE technology (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NOT NULL
);
CREATE TABLE project_technology (
    `project_id` INT NOT NULL,
    `technology_id` INT NOT NULL,
    CONSTRAINT fk_technology_project_id FOREIGN KEY (project_id) REFERENCES project(id),
    CONSTRAINT fk_project_technology_id FOREIGN KEY (technology_id) REFERENCES technology(id)
);