import { tripAxios } from "@/util/http-commons";

const tripApi = tripAxios();

function availLocation(success, fail){
    tripApi.get(`/sido`).then(success).catch(fail)
}

export { availLocation };
