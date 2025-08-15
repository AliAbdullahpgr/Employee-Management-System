const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile Q2 sales data into a summarized report.",
        "date": "2025-08-20",
        "category": "Reporting",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Follow-up",
        "description": "Email follow-up to top-tier clients.",
        "date": "2025-08-22",
        "category": "Communication",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Inventory Check",
        "description": "Verify stock levels for warehouse items.",
        "date": "2025-08-18",
        "category": "Inventory",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update Website Content",
        "description": "Replace outdated product descriptions.",
        "date": "2025-08-15",
        "category": "Web",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Discuss new feature rollout plan.",
        "date": "2025-08-21",
        "category": "Meetings",
        "active": false,
        "new_task": true,
        "completed": true,
        "failed": false
      },
      {
        "title": "Market Research",
        "description": "Analyze competitor pricing strategy.",
        "date": "2025-08-19",
        "category": "Research",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Prepare Presentation",
        "description": "Design slides for quarterly review.",
        "date": "2025-08-25",
        "category": "Design",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Social Media Campaign",
        "description": "Plan September social media schedule.",
        "date": "2025-08-28",
        "category": "Marketing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review pull requests for backend repo.",
        "date": "2025-08-17",
        "category": "Development",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug Fixing",
        "description": "Resolve reported UI glitches.",
        "date": "2025-08-16",
        "category": "Development",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Onboarding New Staff",
        "description": "Conduct training session for new hires.",
        "date": "2025-08-26",
        "category": "HR",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Data Backup",
        "description": "Backup all company files to cloud storage.",
        "date": "2025-08-14",
        "category": "IT",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Vendor Meeting",
        "description": "Negotiate contract renewal terms.",
        "date": "2025-08-18",
        "category": "Procurement",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Security Audit",
        "description": "Perform a security audit on network systems.",
        "date": "2025-08-24",
        "category": "Security",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Policy Update",
        "description": "Revise HR policy documents.",
        "date": "2025-08-20",
        "category": "HR",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Budget Plan",
        "description": "Draft budget plan for next fiscal quarter.",
        "date": "2025-08-30",
        "category": "Finance",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "System Upgrade",
        "description": "Upgrade all workstations to latest OS.",
        "date": "2025-08-15",
        "category": "IT",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Customer Feedback",
        "description": "Collect and analyze customer survey data.",
        "date": "2025-08-19",
        "category": "Customer Service",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Newsletter Draft",
        "description": "Write September newsletter for clients.",
        "date": "2025-08-27",
        "category": "Marketing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "admin",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
  try {
    const employeesData = JSON.parse(localStorage.getItem('employees'));
    const adminData = JSON.parse(localStorage.getItem('admin'));
    
    return {
      employees: employeesData || employees, // Use the original data if localStorage is null
      admin: adminData || admin
    };
  } catch (error) {
    console.error('Error parsing localStorage data:', error);
    return {employees: employees, admin: admin}; // Return the original data on error
  }
}

// Always initialize with the actual data
setLocalStorage();
