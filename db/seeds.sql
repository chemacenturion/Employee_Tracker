INSERT INTO department (name)
VALUES  ("Pro Shop"),
        ("Outside Services"),
        ("Instruction"),
        ("Membership Services");

INSERT INTO role (title, salary, department_id)
VALUES  ("Head Professional", 50000, 1),
        ("Assistant Professional", 28000, 1),
        ("Sales Person", 21000, 1),
        ("Caddie Master", 100000, 2),
        ("Outside Services Attendant", 20000, 2),
        ("Director of Instruction", 50000, 3),
        ("Head Teaching Professional", 40000, 3),
        ("Assistant Teaching Professional", 25000, 3),
        ("Membership Director", 50000, 4),
        ("Accountant", 50000, 4);

-- Need to return and add manager_id
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Mike", "McGady", 1, NULL),
        ("Sean", "McGady", 2, 1),
        ("Alex", "Bogdon", 3, 1),
        ("Mike", "Ucceletti", 4, NULL),
        ("Ed", "Lawler", 5, 4),
        ("Tom", "Harrington", 6, NULL),
        ("Christian", "Brailsford", 7, 6),
        ("Jose Maria", "Centurion", 8, 6),
        ("Russ", "Danyluk", 9, NULL),
        ("Robert", "Greenawalt", 10, 9);
    