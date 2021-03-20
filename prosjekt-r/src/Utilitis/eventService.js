import client from './client';

const eventFields = `
    filmtittel,
    'movieactor': skuespiller->skuespiller
`;

export const getEvents = async () => {
    const data = await client.fetch(`*[_type == "movietitle"]{${eventFields}}`);
    return data;
};
