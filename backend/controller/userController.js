export const getCurrentUser= async (req, res) => {
            try {
            let user =await user.findById(req.userId).select
            ("-password")
            if(!user) {
                return res.status(404).json({message: "user is not found"})
                }
                return res.status(200).json(user)
                } catch (error) {
            console.log(error)
            return res.status(500).json({message:`getCurrentUser error ${error}` })
    }
    }
export const getAdmin= async (req, res) =>{
    try {
            let adminEmail =req.adminEmail
            // await user.findById(req.userId).select
            // ("-password")
            if(!adminEmail) {
                return res.status(404).json({message: "admin is not found"})
                }
                return res.status(200).json({
                    email:adminEmail,role:admin
                        })
                } catch (error) {
            console.log(error)
            return res.status(500).json({message:`getAdmin error ${error}` })
    }
}