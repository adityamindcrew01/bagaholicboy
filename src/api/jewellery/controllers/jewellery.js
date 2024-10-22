'use strict';

/**
 * jewellery controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::jewellery.jewellery');
module.exports = createCoreController('api::jewellery.jewellery',({strapi}) => ({
    async findOne(ctx) {
        
      const {id} = ctx.params;


      const entry = await strapi.db.query('api::jewellery.jewellery').findOne({
        
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
