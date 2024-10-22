'use strict';

/**
 * bags-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::bags-list.bags-list');
module.exports = createCoreController('api::bags-list.bags-list',({strapi}) => ({
    async findOne(ctx) {
        
      const {id} = ctx.params;


      const entry = await strapi.db.query('api::bags-list.bags-list').findOne({
        
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