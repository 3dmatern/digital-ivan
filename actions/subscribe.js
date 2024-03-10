"use server";

import httpService from "@/services/http-service";

// export const getSubscribe = async (accessToken) => {
//     try {
//         const { data } = await httpService.get(
//             "get_subscribe",
//             generateHeaders(accessToken)
//         );
//         console.log(data);

//         return {
//             success: data,
//         };
//     } catch (error) {
//         if (error?.code === "ERR_NETWORK") {
//             return {
//                 error: "Что-то пошло не так. Попробуйте позже",
//             };
//         }

//         if (error.code === "ERR_BAD_REQUEST") {
//             return {
//                 error: error?.response?.data?.msg,
//             };
//         }

//         return {
//             error: "Что-то пошло не так. Попробуйте позже",
//         };
//     }
// };

export const subscribeExtend = async (accessToken) => {
    try {
        const { data } = await httpService.post(
            "extend_subscription",
            {
                months: 1,
            },
            generateHeaders(accessToken)
        );
        const {
            data: { subscription_end, username },
        } = await httpService.get(
            "get_subscribe",
            generateHeaders(accessToken)
        );

        return {
            success: data.message,
            username,
            subscriptionEnd: subscription_end,
        };
    } catch (error) {
        if (error?.code === "ERR_NETWORK") {
            return {
                error: "Что-то пошло не так. Попробуйте позже",
            };
        }

        if (error.code === "ERR_BAD_REQUEST") {
            return {
                error: error?.response?.data?.msg,
            };
        }

        return {
            error: "Что-то пошло не так. Попробуйте позже",
        };
    }
};

function generateHeaders(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    };
}
