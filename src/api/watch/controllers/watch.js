'use strict';

/**
 * watch controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::watch.watch');
module.exports = createCoreController('api::watch.watch',({strapi}) => ({
    async findOne(ctx) {
        
      const {id} = ctx.params;


      const entry = await strapi.db.query('api::watch.watch').findOne({
        
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