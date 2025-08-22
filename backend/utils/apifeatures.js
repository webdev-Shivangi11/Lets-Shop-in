 class ApiFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }



    //searching
    search() {
        const keyword = this.queryString.keyword
            ? {
                name: {
                    $regex: this.queryString.keyword,
                    $options: 'i',
                },
            }
            : {};

        this.query = this.query.find({ ...keyword });
        return this;
    }

    //filtering
    // filter() {
    //     const queryCopy = { ...this.queryString };
    //     //removing fields from the query
    //     const removeFields = ['keyword', 'page', 'limit'];
    //     removeFields.forEach((key) => delete queryCopy[key]);

    //     //filter for price and rating
    //     let queryStr = JSON.stringify(queryCopy);
    //     queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        
    //     this.query = this.query.find(JSON.parse(queryStr));
    //     return this;
    // }

    // //pagination
    // pagination(resultPerPage) {
    //     const currentPage = Number(this.queryString.page) || 1;
    //     const skip = resultPerPage * (currentPage - 1);

    //     this.query = this.query.limit(resultPerPage).skip(skip);
    //     return this;
    // }
}
export default ApiFeatures;