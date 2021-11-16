import { Request, Response } from 'express';

import { db } from '../config/firebase';

const deleteUserData = async (req: Request, res: Response) => {

    //   This user id is used as a foreign key in the following collections: 
    // - weekly_ideas ("user_id")
    // - user_response ("user_id")
    // - pair (either "user_1" or "user_2")
    // - match (either "user_1_id" or "user_2_id")
    // - invite ("inviter_id")

    let { userId } = req.body;
    if (!userId) {
        return res.status(400).json({
            message: "Please Provide user Id",
        });
    }
    let userSnapshot = await db.collection('users').doc(userId).get();

    let weekIdeaSnapshot = await db.collection('weekly_ideas').where('user_id', '==', userId).get();
    let userResponseSnapshot = await db.collection('user_response').where('user_id', '==', userId).get();
    let userOneSnapshot = await db.collection('pair').where('user_1', '==', userId).get();
    let userTwoSnapshot = await db.collection('pair').where('user_2', '==', userId).get();
    let matchOneSnapshot = await db.collection('match').where('user_1_id', '==', userId).get();
    let matchTwoSnapshot = await db.collection('match').where('user_2_id', '==', userId).get();

    let inviteSnapshot = await db.collection('invite').where('inviter_id', '==', userId).get();

    if (userSnapshot.exists) {
        const batch = db.batch();
        try {
            if (!weekIdeaSnapshot.empty) {
                weekIdeaSnapshot.forEach(doc => {
                    batch.delete(doc.ref);
                });
            }

            if (!userResponseSnapshot.empty) {
                userResponseSnapshot.forEach(doc => {
                    batch.delete(doc.ref);
                });

            }
            if (!userOneSnapshot.empty) {
                userOneSnapshot.forEach(doc => {
                    batch.delete(doc.ref);
                });
            }
            if (!userTwoSnapshot.empty) {
                userTwoSnapshot.forEach(doc => {
                    batch.delete(doc.ref);
                });
            }
            if (!matchOneSnapshot.empty) {
                matchOneSnapshot.forEach(doc => {
                    batch.delete(doc.ref);
                });
            }
            if (!matchTwoSnapshot.empty) {
                matchTwoSnapshot.forEach(doc => {
                    batch.delete(doc.ref);
                });
            }
            if (!inviteSnapshot.empty) {
                inviteSnapshot.forEach(doc => {
                    batch.delete(doc.ref);
                });
            }

            db.collection("users").doc(userId).delete();
            let result = await batch.commit();
            return res.status(200).json({
                success: true,
                message: `User Data deleted ${result}`
            })

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }




    } else {
        return res.status(400).json({
            success: false,
            message: "user Does Not exist"
        });
    }



}

export { deleteUserData }

