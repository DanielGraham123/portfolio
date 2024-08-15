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
            .title('Projects Page')
        ),

      // S.listItem()
      //     .title('Events')
      //     .icon(MdOutlineEventNote)
      //     .child(
      //         S.editor()
      //             .schemaType('events')
      //             .documentId('eventsPage')
      //             .title('Events Page')
      //     ),

      // // Add a visual divider (optional)
      S.divider(),

      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => ![
          'hero',
          'bento',
          'projects',
          //   'events'
        ].includes(listItem.getId()))
    ])