'use strict';

/**
 * fashion-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::fashion-list.fashion-list');
module.exports = createCoreController('api::fashion-list.fashion-list',({strapi}) => ({
    async findOne(ctx) {
        
      const {id} = ctx.params;


      const entry = await strapi.db.query('api::fashion-list.fashion-list').findOne({
        
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
