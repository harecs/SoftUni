class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        const isNameValid = name !== '' && name !== undefined && name !== null;
        const isSalaryValid = salary >= 0 && salary !== '' && salary !== undefined && salary !== null;
        const isValidPosition = position !== '' && position !== undefined && position !== null;
        const isValidDepartment = department !== '' && department !== undefined && department !== null;

        if (!isNameValid || !isSalaryValid || !isValidPosition || !isValidDepartment) {
            throw new Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = { department, averageSalary: 0, workers: [] };
        }

        this.departments[department].averageSalary += salary;
        this.departments[department].workers.push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let output = '';

        Object.values(this.departments).forEach(department => {
            department.averageSalary /= department.workers.length;
        });

        const sortedDepartmentNames = Object.keys(this.departments).sort((a, b) => {
            return this.departments[b].averageSalary - this.departments[a].averageSalary;
        });

        const bestDepartmentObj = this.departments[sortedDepartmentNames[0]];
        const sortedWorkers = bestDepartmentObj.workers.sort((a, b) => {
            if (b.salary - a.salary > 0) {
                return 1;
            } else if (b.salary - a.salary < 0) {
                return -1;
            } else {
                return a.name.localeCompare(b.name);
            }
        });

        output += `Best Department is: ${bestDepartmentObj.department}\n`;
        output += `Average salary: ${bestDepartmentObj.averageSalary.toFixed(2)}\n`;
        sortedWorkers.forEach(worker => {
            output += `${worker.name} ${worker.salary} ${worker.position}\n`;
        });

        return output.trim();
    }
}