import {Router} from "express"


const router=Router()

router.route("/dashboard").post()
router.route("/volunteer").post()
router.route("/parent").post()
router.route("/recommendation").post()

export default router;