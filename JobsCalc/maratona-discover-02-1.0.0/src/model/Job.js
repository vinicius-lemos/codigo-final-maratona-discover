const Database = require('../db/config')

let data = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 60,
        created_at: Date.now()
    },
    {
        id: 2,
        name: "OneTwo Project",
        "daily-hours": 3,
        "total-hours": 47,
        created_at: Date.now()
    }
]

module.exports = {
    get() {
        return data;
    },

    async update(newJob) {
        const db = await Database();

        await db.run(`UPDATE job WHERE id = ${newJob.id} SET
        name = "${newJob.name}",
        daily_hours = ${newJob["daily-hours"]},
        total_hours = ${newJob["total-hours"]},
        created_at = ${newJob["created_at"]}
        `)

        await db.close();
    },

    delete(id) {
        data = data.filter(job => Number(job.id) != Number(id))
    },

    async create(newJob) {
        const db = await Database();

        await db.run(`INSERT INTO job(
            name,
            daily_hours,
            total_hours,
            created_at
        ) VALUES (
            "${newJob.name}",
            ${newJob["daily-hours"]},
            ${newJob["total-hours"]},
            ${newJob["created_at"]}
        )`)

        await db.close();

        data.push(newJob)
    }
}