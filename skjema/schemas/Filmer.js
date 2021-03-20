const movies = {
    title: 'Movie-title',
    name: 'movietitle',
    type:  'document',
    fields:[
        {
            title: 'title',
            name: 'filmtittel',
            type: 'string'
        },
        {
            title: 'skuespiller',
            name: 'skuespiller',
            type: 'reference',
            to:[{type: 'movieactor'}]
        }
    ]
}

export default movies;