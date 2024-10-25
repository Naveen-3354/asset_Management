const employees = [
    {
        "firstName": "Emily",
        "lastName": "Carter",
        "email": "emily.carter@example.com",
        "phoneNumber": "(555) 123-4567",
        "position": "Software Engineer",
        "department": "Development",
        "status": "Active"
    },
    {
        "firstName": "Michael",
        "lastName": "Thompson",
        "email": "michael.thompson@example.com",
        "phoneNumber": "(555) 234-5678",
        "position": "Systems Analyst",
        "department": "IT Support",
        "status": "Active"
    },
    {
        "firstName": "Sarah",
        "lastName": "Patel",
        "email": "sarah.patel@example.com",
        "phoneNumber": "(555) 345-6789",
        "position": "Network Administrator",
        "department": "Networking",
        "status": "Inactive"
    },
    {
        "firstName": "David",
        "lastName": "Lee",
        "email": "david.lee@example.com",
        "phoneNumber": "(555) 456-7890",
        "position": "DevOps Engineer",
        "department": "Operations",
        "status": "Active"
    },
    {
        "firstName": "Jessica",
        "lastName": "Kim",
        "email": "jessica.kim@example.com",
        "phoneNumber": "(555) 567-8901",
        "position": "Data Scientist",
        "department": "Data Analytics",
        "status": "Inactive"
    },
    {
        "firstName": "James",
        "lastName": "Smith",
        "email": "james.smith@example.com",
        "phoneNumber": "(555) 678-9012",
        "position": "Web Developer",
        "department": "Development",
        "status": "Active"
    },
    {
        "firstName": "Laura",
        "lastName": "Johnson",
        "email": "laura.johnson@example.com",
        "phoneNumber": "(555) 789-0123",
        "position": "IT Manager",
        "department": "Management",
        "status": "Active"
    },
    {
        "firstName": "Robert",
        "lastName": "Brown",
        "email": "robert.brown@example.com",
        "phoneNumber": "(555) 890-1234",
        "position": "Quality Assurance Tester",
        "department": "Testing",
        "status": "Inactive"
    },
    {
        "firstName": "Linda",
        "lastName": "Davis",
        "email": "linda.davis@example.com",
        "phoneNumber": "(555) 901-2345",
        "position": "UX Designer",
        "department": "Design",
        "status": "Active"
    },
    {
        "firstName": "William",
        "lastName": "Wilson",
        "email": "william.wilson@example.com",
        "phoneNumber": "(555) 012-3456",
        "position": "Cloud Architect",
        "department": "Cloud Services",
        "status": "Active"
    },
    {
        "firstName": "Patricia",
        "lastName": "Garcia",
        "email": "patricia.garcia@example.com",
        "phoneNumber": "(555) 123-4568",
        "position": "Database Administrator",
        "department": "Database",
        "status": "Inactive"
    },
    {
        "firstName": "Charles",
        "lastName": "Martinez",
        "email": "charles.martinez@example.com",
        "phoneNumber": "(555) 234-5679",
        "position": "IT Support Specialist",
        "department": "IT Support",
        "status": "Active"
    },
    {
        "firstName": "Susan",
        "lastName": "Hernandez",
        "email": "susan.hernandez@example.com",
        "phoneNumber": "(555) 345-6780",
        "position": "Cybersecurity Analyst",
        "department": "Security",
        "status": "Active"
    },
    {
        "firstName": "Joseph",
        "lastName": "Lopez",
        "email": "joseph.lopez@example.com",
        "phoneNumber": "(555) 456-7891",
        "position": "Business Analyst",
        "department": "Analysis",
        "status": "Inactive"
    },
    {
        "firstName": "Mary",
        "lastName": "Gonzalez",
        "email": "mary.gonzalez@example.com",
        "phoneNumber": "(555) 567-8902",
        "position": "Front-end Developer",
        "department": "Development",
        "status": "Active"
    },
    {
        "firstName": "Thomas",
        "lastName": "Wilson",
        "email": "thomas.wilson@example.com",
        "phoneNumber": "(555) 678-9013",
        "position": "Back-end Developer",
        "department": "Development",
        "status": "Inactive"
    },
    {
        "firstName": "Angela",
        "lastName": "Anderson",
        "email": "angela.anderson@example.com",
        "phoneNumber": "(555) 789-0124",
        "position": "IT Consultant",
        "department": "Consulting",
        "status": "Active"
    },
    {
        "firstName": "Daniel",
        "lastName": "Thomas",
        "email": "daniel.thomas@example.com",
        "phoneNumber": "(555) 890-1235",
        "position": "Mobile Developer",
        "department": "Development",
        "status": "Inactive"
    },
    {
        "firstName": "Lisa",
        "lastName": "Taylor",
        "email": "lisa.taylor@example.com",
        "phoneNumber": "(555) 901-2346",
        "position": "Data Engineer",
        "department": "Data Engineering",
        "status": "Active"
    },
    {
        "firstName": "Mark",
        "lastName": "Moore",
        "email": "mark.moore@example.com",
        "phoneNumber": "(555) 012-3457",
        "position": "Technical Writer",
        "department": "Documentation",
        "status": "Active"
    },
    {
        "firstName": "Jennifer",
        "lastName": "Jackson",
        "email": "jennifer.jackson@example.com",
        "phoneNumber": "(555) 123-4569",
        "position": "System Administrator",
        "department": "Administration",
        "status": "Inactive"
    },
    {
        "firstName": "Brian",
        "lastName": "White",
        "email": "brian.white@example.com",
        "phoneNumber": "(555) 234-5670",
        "position": "Game Developer",
        "department": "Gaming",
        "status": "Active"
    },
    {
        "firstName": "Karen",
        "lastName": "Harris",
        "email": "karen.harris@example.com",
        "phoneNumber": "(555) 345-6781",
        "position": "SEO Specialist",
        "department": "Marketing",
        "status": "Active"
    },
    {
        "firstName": "David",
        "lastName": "Martin",
        "email": "david.martin@example.com",
        "phoneNumber": "(555) 456-7892",
        "position": "IT Trainer",
        "department": "Training",
        "status": "Inactive"
    },
    {
        "firstName": "Nancy",
        "lastName": "Thompson",
        "email": "nancy.thompson@example.com",
        "phoneNumber": "(555) 567-8903",
        "position": "Data Analyst",
        "department": "Data Analytics",
        "status": "Active"
    },
    {
        "firstName": "Kevin",
        "lastName": "Garcia",
        "email": "kevin.garcia@example.com",
        "phoneNumber": "(555) 678-9014",
        "position": "Artificial Intelligence Engineer",
        "department": "AI Development",
        "status": "Active"
    },
    {
        "firstName": "Sandra",
        "lastName": "Martinez",
        "email": "sandra.martinez@example.com",
        "phoneNumber": "(555) 789-0125",
        "position": "Project Manager",
        "department": "Management",
        "status": "Inactive"
    }
]


const assetCategorys = [
    {
        "name": "Computers",
        "description": "Desktops, laptops, and workstations used for processing information.",
        "status": "Active"
    },
    {
        "name": "Networking Equipment",
        "description": "Routers, switches, and access points for network connectivity.",
        "status": "Active"
    },
    {
        "name": "Servers",
        "description": "High-performance machines for hosting applications and services.",
        "status": "Active"
    },
    {
        "name": "Storage Devices",
        "description": "External hard drives, SSDs, and network storage systems.",
        "status": "Inactive"
    },
    {
        "name": "Peripherals",
        "description": "Input and output devices such as keyboards, mice, and printers.",
        "status": "Active"
    },
    {
        "name": "Software Licenses",
        "description": "Licenses for operating systems, applications, and productivity tools.",
        "status": "Active"
    },
    {
        "name": "Mobile Devices",
        "description": "Smartphones and tablets used for mobile communication and applications.",
        "status": "Inactive"
    },
    {
        "name": "Cabling and Infrastructure",
        "description": "Cables and physical infrastructure for network connectivity.",
        "status": "Active"
    },
    {
        "name": "Backup Solutions",
        "description": "Systems and software for data backup and recovery.",
        "status": "Active"
    },
    {
        "name": "Virtual Machines",
        "description": "Software-based emulations of physical computers.",
        "status": "Active"
    }
]

const assets = [
    {
        "serialNumber": "SN001",
        "make": "Dell",
        "model": "XPS 15",
        "categoryId": 1,
        "stock": 10,
        "purchaseDate": "2023-01-15",
        "warrantyExpiryDate": "2025-01-15",
        "status": "Active"
    },
    {
        "serialNumber": "SN002",
        "make": "Apple",
        "model": "MacBook Pro",
        "categoryId": 1,
        "stock": 8,
        "purchaseDate": "2022-02-10",
        "warrantyExpiryDate": "2024-02-10",
        "status": "Active"
    },
    {
        "serialNumber": "SN003",
        "make": "Lenovo",
        "model": "ThinkPad X1",
        "categoryId": 1,
        "stock": 12,
        "purchaseDate": "2023-03-25",
        "warrantyExpiryDate": "2025-03-25",
        "status": "Active"
    },
    {
        "serialNumber": "SN004",
        "make": "HP",
        "model": "Spectre x360",
        "categoryId": 1,
        "stock": 5,
        "purchaseDate": "2023-04-30",
        "warrantyExpiryDate": "2025-04-30",
        "status": "Inactive"
    },
    {
        "serialNumber": "SN005",
        "make": "Asus",
        "model": "ZenBook 14",
        "categoryId": 1,
        "stock": 7,
        "purchaseDate": "2023-05-15",
        "warrantyExpiryDate": "2025-05-15",
        "status": "Active"
    },
    {
        "serialNumber": "SN006",
        "make": "Cisco",
        "model": "Catalyst 9200",
        "categoryId": 2,
        "stock": 5,
        "purchaseDate": "2022-11-20",
        "warrantyExpiryDate": "2024-11-20",
        "status": "Active"
    },
    {
        "serialNumber": "SN007",
        "make": "Netgear",
        "model": "Nighthawk RAX80",
        "categoryId": 2,
        "stock": 10,
        "purchaseDate": "2023-06-01",
        "warrantyExpiryDate": "2025-06-01",
        "status": "Active"
    },
    {
        "serialNumber": "SN008",
        "make": "TP-Link",
        "model": "Archer AX6000",
        "categoryId": 2,
        "stock": 8,
        "purchaseDate": "2023-02-14",
        "warrantyExpiryDate": "2025-02-14",
        "status": "Inactive"
    },
    {
        "serialNumber": "SN009",
        "make": "Ubiquiti",
        "model": "UniFi Dream Machine",
        "categoryId": 2,
        "stock": 6,
        "purchaseDate": "2023-07-20",
        "warrantyExpiryDate": "2025-07-20",
        "status": "Active"
    },
    {
        "serialNumber": "SN010",
        "make": "MikroTik",
        "model": "hAP ac2",
        "categoryId": 2,
        "stock": 4,
        "purchaseDate": "2023-08-15",
        "warrantyExpiryDate": "2025-08-15",
        "status": "Active"
    },
    {
        "serialNumber": "SN011",
        "make": "HP",
        "model": "ProLiant DL380",
        "categoryId": 3,
        "stock": 3,
        "purchaseDate": "2023-05-10",
        "warrantyExpiryDate": "2026-05-10",
        "status": "Active"
    },
    {
        "serialNumber": "SN012",
        "make": "Dell",
        "model": "PowerEdge R740",
        "categoryId": 3,
        "stock": 2,
        "purchaseDate": "2023-09-01",
        "warrantyExpiryDate": "2026-09-01",
        "status": "Active"
    },
    {
        "serialNumber": "SN013",
        "make": "Lenovo",
        "model": "ThinkSystem SR650",
        "categoryId": 3,
        "stock": 1,
        "purchaseDate": "2023-04-25",
        "warrantyExpiryDate": "2026-04-25",
        "status": "Inactive"
    },
    {
        "serialNumber": "SN014",
        "make": "Supermicro",
        "model": "SYS-5019S-WTR",
        "categoryId": 3,
        "stock": 4,
        "purchaseDate": "2022-12-15",
        "warrantyExpiryDate": "2025-12-15",
        "status": "Active"
    },
    {
        "serialNumber": "SN015",
        "make": "Fujitsu",
        "model": "PRIMERGY RX2540 M5",
        "categoryId": 3,
        "stock": 2,
        "purchaseDate": "2023-08-10",
        "warrantyExpiryDate": "2026-08-10",
        "status": "Active"
    },
    {
        "serialNumber": "SN016",
        "make": "Seagate",
        "model": "Expansion Portable",
        "categoryId": 4,
        "stock": 15,
        "purchaseDate": "2022-09-05",
        "warrantyExpiryDate": "2024-09-05",
        "status": "Inactive"
    },
    {
        "serialNumber": "SN017",
        "make": "Western Digital",
        "model": "My Passport",
        "categoryId": 4,
        "stock": 20,
        "purchaseDate": "2023-01-12",
        "warrantyExpiryDate": "2025-01-12",
        "status": "Active"
    },
    {
        "serialNumber": "SN018",
        "make": "Samsung",
        "model": "T5 Portable SSD",
        "categoryId": 4,
        "stock": 10,
        "purchaseDate": "2023-06-18",
        "warrantyExpiryDate": "2025-06-18",
        "status": "Active"
    },
    {
        "serialNumber": "SN019",
        "make": "SanDisk",
        "model": "Extreme Portable SSD",
        "categoryId": 4,
        "stock": 8,
        "purchaseDate": "2023-03-22",
        "warrantyExpiryDate": "2025-03-22",
        "status": "Active"
    },
    {
        "serialNumber": "SN020",
        "make": "ADATA",
        "model": "HD710 Pro",
        "categoryId": 4,
        "stock": 5,
        "purchaseDate": "2023-02-28",
        "warrantyExpiryDate": "2025-02-28",
        "status": "Inactive"
    },
    {
        "serialNumber": "SN021",
        "make": "Apple",
        "model": "iPhone 13",
        "categoryId": 5,
        "stock": 20,
        "purchaseDate": "2023-03-22",
        "warrantyExpiryDate": "2025-03-22",
        "status": "Active"
    },
    {
        "serialNumber": "SN022",
        "make": "Samsung",
        "model": "Galaxy S21",
        "categoryId": 5,
        "stock": 15,
        "purchaseDate": "2023-01-15",
        "warrantyExpiryDate": "2025-01-15",
        "status": "Active"
    },
    {
        "serialNumber": "SN023",
        "make": "Google",
        "model": "Pixel 6",
        "categoryId": 5,
        "stock": 10,
        "purchaseDate": "2023-07-10",
        "warrantyExpiryDate": "2025-07-10",
        "status": "Active"
    },
    {
        "serialNumber": "SN024",
        "make": "OnePlus",
        "model": "9 Pro",
        "categoryId": 5,
        "stock": 5,
        "purchaseDate": "2023-02-05",
        "warrantyExpiryDate": "2025-02-05",
        "status": "Inactive"
    },
    {
        "serialNumber": "SN025",
        "make": "Xiaomi",
        "model": "Mi 11",
        "categoryId": 5,
        "stock": 12,
        "purchaseDate": "2023-04-20",
        "warrantyExpiryDate": "2025-04-20",
        "status": "Active"
    }
]

const assetIssues = [
    {
        "issueDate": "2023-01-05",
        "returnDate": "2023-02-05",
        "notes": "Asset issued for the initial phase of Project Alpha to facilitate team collaboration and efficiency.",
        "assetId": 3,
        "employeeId": 7,
        "status": "ISSUED"
    },
    {
        "issueDate": "2023-01-15",
        "returnDate": "2023-02-15",
        "notes": "Issued for the analysis phase of Project Beta. Ensure to return the asset once the phase is completed.",
        "assetId": 8,
        "employeeId": 12,
        "status": "RETURNED"
    },
    {
        "issueDate": "2023-02-01",
        "returnDate": "2023-03-01",
        "notes": "Asset issued for Project Gamma. Required for data collection and reporting.",
        "assetId": 5,
        "employeeId": 3,
        "status": "ISSUED"
    },
    {
        "issueDate": "2023-02-20",
        "returnDate": "2023-03-20",
        "notes": "Issued for the design review of Project Delta. Please handle with care.",
        "assetId": 10,
        "employeeId": 25,
        "status": "ISSUED"
    },
    {
        "issueDate": "2023-03-10",
        "returnDate": "2023-04-10",
        "notes": "This asset is required for testing the new features in Project Epsilon. Ensure it is returned promptly.",
        "assetId": 15,
        "employeeId": 18,
        "status": "SCARP"
    },
    {
        "issueDate": "2023-03-15",
        "returnDate": "2023-04-15",
        "notes": "Issued for training purposes in Project Zeta. Essential for skill development.",
        "assetId": 9,
        "employeeId": 14,
        "status": "ISSUED"
    },
    {
        "issueDate": "2023-04-05",
        "returnDate": "2023-05-05",
        "notes": "Asset issued for documentation work in Project Eta. Return after final review.",
        "assetId": 1,
        "employeeId": 22,
        "status": "RETURNED"
    },
    {
        "issueDate": "2023-04-15",
        "returnDate": "2023-05-15",
        "notes": "Issued for field research related to Project Theta. Handle responsibly.",
        "assetId": 20,
        "employeeId": 8,
        "status": "ISSUED"
    },
    {
        "issueDate": "2023-05-01",
        "returnDate": "2023-06-01",
        "notes": "Asset issued to support development in Project Iota. Expected return date after completion.",
        "assetId": 6,
        "employeeId": 21,
        "status": "ISSUED"
    },
    {
        "issueDate": "2023-05-15",
        "returnDate": "2023-06-15",
        "notes": "Issued for quality assurance testing in Project Kappa. Ensure all results are documented.",
        "assetId": 11,
        "employeeId": 9,
        "status": "RETURNED"
    },
    {
        "issueDate": "2023-06-05",
        "returnDate": "2023-07-05",
        "notes": "Asset issued for the implementation phase of Project Lambda. Timely return is crucial.",
        "assetId": 7,
        "employeeId": 15,
        "status": "ISSUED"
    },
    {
        "issueDate": "2023-06-10",
        "returnDate": "2023-07-10",
        "notes": "This asset has been issued for market research in Project Mu. Return upon project completion.",
        "assetId": 13,
        "employeeId": 19,
        "status": "ISSUED"
    },
    {
        "issueDate": "2023-06-20",
        "returnDate": "2023-07-20",
        "notes": "Issued for compliance checks related to Project Nu. Ensure proper handling and return.",
        "assetId": 18,
        "employeeId": 5,
        "status": "RETURNED"
    },
    {
        "issueDate": "2023-07-01",
        "returnDate": "2023-08-01",
        "notes": "Asset issued for the development of new features in Project Xi. Timely return is expected.",
        "assetId": 17,
        "employeeId": 27,
        "status": "ISSUED"
    },
    {
        "issueDate": "2023-07-10",
        "returnDate": "2023-08-10",
        "notes": "Issued for the assessment of the beta version in Project Omicron. Return once testing is completed.",
        "assetId": 2,
        "employeeId": 13,
        "status": "SCARP"
    },
    {
        "issueDate": "2023-07-20",
        "returnDate": "2023-08-20",
        "notes": "Issued to support operational needs in Project Pi. Handle with care and return promptly.",
        "assetId": 4,
        "employeeId": 2,
        "status": "ISSUED"
    },
    {
        "issueDate": "2023-08-01",
        "returnDate": "2023-09-01",
        "notes": "Asset issued for strategic planning in Project Rho. Timely return is appreciated.",
        "assetId": 19,
        "employeeId": 16,
        "status": "RETURNED"
    },
    {
        "issueDate": "2023-08-15",
        "returnDate": "2023-09-15",
        "notes": "Issued for technical support in Project Sigma. Ensure the asset is returned in good condition.",
        "assetId": 14,
        "employeeId": 10,
        "status": "ISSUED"
    },
    {
        "issueDate": "2023-09-05",
        "returnDate": "2023-10-05",
        "notes": "Asset issued for data analysis in Project Tau. Important to return after analysis completion.",
        "assetId": 25,
        "employeeId": 26,
        "status": "ISSUED"
    }
]



module.exports ={
    employees, assetCategorys, assets, assetIssues
}