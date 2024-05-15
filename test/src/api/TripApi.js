import { tripAxios } from "@/util/http-commons";

const tripApi = tripAxios();

function availLoacation(success, fail){
    tripApi.get(`/sido`).then(success).catch(fail)
}

export { availLoacation };
