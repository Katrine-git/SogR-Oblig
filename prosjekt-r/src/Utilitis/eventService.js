import client from './client';

const eventFields = `
    filmtittel,
    'movieactor': skuespiller->skuespiller
`;

export const getEvents = async () => {
    const data = await client.fetch(`*[_type == "movietitle"]{${eventFields}}`);
    console.log("heu", data);
    return data;
};

export const getSkuespiller= async () => {
    const data = await client.fetch(`*[_type == "movietitle" && skuespiller -> title == $skuespiller ]{${eventFields}}`);
    return data;
};