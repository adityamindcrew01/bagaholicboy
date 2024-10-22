'use strict';

/**
 * celebrity controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::celebrity.celebrity');



module.exports = createCoreController('api::celebrity.celebrity',({strapi}) => ({
    async findOne(ctx) {
        
      const {id} = ctx.params;


      const entry = await strapi.db.query('api::celebrity.celebrity').findOne({
        
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
