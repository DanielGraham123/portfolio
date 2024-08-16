import { AiOutlineHome } from "react-icons/ai"
import { MdArticle, MdMiscellaneousServices, MdOutlineEventNote } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([

      S.listItem()
        .title('Hero')
        .icon(AiOutlineHome)
        .child(
          S.editor()
            .schemaType('hero')
            .documentId('heroSection')
            .title('Hero Section')
        ),

      S.listItem()
        .title('Bento Grid')
        .icon(FaInfoCircle)
        .child(
          S.editor()
            .schemaType('bento')
            .documentId('bentoGrid')
            .title('Bento Grid Section')
        ),

      S.listItem()
        .title('Projects')
        .icon(MdMiscellaneousServices)
        .child(
          S.editor()
            .schemaType('projects')
            .documentId('projectsSection')
            .title('Projects Section')
        ),

      S.listItem()
        .title('Testimonials')
        .icon(MdOutlineEventNote)
        .child(
          S.editor()
            .schemaType('testimonials')
            .documentId('testimonialsSection')
            .title('Testimonials Section')
        ),

      S.listItem()
        .title('Companies')
        .icon(MdOutlineEventNote)
        .child(
          S.editor()
            .schemaType('companies')
            .documentId('companiesSection')
            .title('Companies Section')
        ),

      S.listItem()
        .title('Works')
        .icon(MdOutlineEventNote)
        .child(
          S.editor()
            .schemaType('works')
            .documentId('worksSection')
            .title('Work Experience Section')
        ),

      S.listItem()
        .title('Process')
        .icon(MdOutlineEventNote)
        .child(
          S.editor()
            .schemaType('process')
            .documentId('processSection')
            .title('Process Section')
        ),

      S.listItem()
        .title('Socials')
        .icon(MdArticle)
        .child(
          S.editor()
            .schemaType('socials')
            .documentId('socials')
            .title('Social Links')
        ),

      // // Add a visual divider (optional)
      S.divider(),

      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => ![
          'hero',
          'bento',
          'projects',
          'testimonials',
          'companies',
          'works',
          'process',
          'socials',
        ].includes(listItem.getId()))
    ])