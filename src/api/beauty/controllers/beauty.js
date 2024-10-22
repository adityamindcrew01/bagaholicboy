'use strict';

/**
 * beauty controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::beauty.beauty');

module.exports = createCoreController('api::beauty.beauty',({strapi}) => ({
    async findOne(ctx) {
        
      const {id} = ctx.params;


      const entry = await strapi.db.query('api::beauty.beauty').findOne({
        
        where: { id: id },
        populate: {
             image: "image" ,
            image2: "image2"
    }, 
       
       
      });
        const sanitizedResults = await this.sanitizeOutput(entry, ctx);
    
        return this.transformResponse(sanitizedResults);
      }
}))
