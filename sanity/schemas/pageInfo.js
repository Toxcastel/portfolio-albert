export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "enjoy",
      title: "Enjoy",
      type: "array",
      of: [
        {
          type: "string",
        }
      ]
    },
    {
      name: "backgroundInformation",
      title: "BackgroundInformation",
      type: "text"
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    }
  ],

}
