CREATE TABLE technology (
    `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NOT NULL,
    `category_id` INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id)
);
