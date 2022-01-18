CREATE TABLE images (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `src` VARCHAR(255) NOT NULL,
    `alt` VARCHAR(100) NOT NULL,
    `project_id` INT NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP(),
    CONSTRAINT fk_project_id FOREIGN KEY (project_id) REFERENCES project(id)
);