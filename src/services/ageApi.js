import axios from 'axios';

async function getAgeByName() {
    let ageResponse;
    try {
        ageResponse = await axios.get('https://api.agify.io/?name=Bob');
    }
    catch(e) {
        Error(e)
    }
    return ageResponse.data;
}

export { getAgeByName };
