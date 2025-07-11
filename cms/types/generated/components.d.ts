import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutProcess extends Struct.ComponentSchema {
  collectionName: 'components_about_about_processes';
  info: {
    displayName: 'about.process';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogBlogTag extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_tags';
  info: {
    displayName: 'blog.tag';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    slug: Schema.Attribute.UID &
      Schema.Attribute.CustomField<'plugin::strapi-advanced-uuid.uuid'>;
  };
}

export interface CaseCaseCaseColor extends Struct.ComponentSchema {
  collectionName: 'components_case_case_case_colors';
  info: {
    displayName: 'case.case-color';
  };
  attributes: {
    hex: Schema.Attribute.String;
    name: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface CaseCaseCaseQuote extends Struct.ComponentSchema {
  collectionName: 'components_case_case_case_quotes';
  info: {
    displayName: 'case.case-quote';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    authorImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    quote: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface CaseCaseCaseStack extends Struct.ComponentSchema {
  collectionName: 'components_case_case_case_stacks';
  info: {
    displayName: 'case.case-stack';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalGlobalIcon extends Struct.ComponentSchema {
  collectionName: 'components_global_global_icons';
  info: {
    displayName: 'global.icon';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-process': AboutAboutProcess;
      'blog.blog-tag': BlogBlogTag;
      'case.case-case-color': CaseCaseCaseColor;
      'case.case-case-quote': CaseCaseCaseQuote;
      'case.case-case-stack': CaseCaseCaseStack;
      'global.global-icon': GlobalGlobalIcon;
    }
  }
}
