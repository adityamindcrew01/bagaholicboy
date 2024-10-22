'use strict';

/**
 * swipper-image controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::swipper-image.swipper-image');


module.exports = createCoreController('api::swipper-image.swipper-image',({strapi}) => ({
    async findOne(ctx) {
        
      const {id} = ctx.params;


      const entry = await strapi.db.query('api::swipper-image.swipper-image').findOne({
        
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