const createActivityC = require("../../controllers/activitiesControllers/createActivityC")

const createActivity = async (req,res)=>{
    try {
        const activity = req.body;
        const createdActivity = await createActivityC(activity)
        return res.status(202).json(createdActivity.dataValues)
    } catch (error) {
        res.status(402).json(error.message)
    }
}

module.exports = createActivity;