'use strict';

/**
 * lifestyle controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::lifestyle.lifestyle');

module.exports = createCoreController('api::lifestyle.lifestyle',({strapi}) => ({
    async findOne(ctx) {
        
      const {id} = ctx.params;


      const entry = await strapi.db.query('api::lifestyle.lifestyle').findOne({
        
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