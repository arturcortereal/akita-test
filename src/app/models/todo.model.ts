import { FormlyFieldConfig } from '@ngx-formly/core';

export class Todo {
  title!: string;
  description!: string;

  formFields() {
    return <FormlyFieldConfig[]>[
      {
        key: 'title',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Title',
          placeholder: 'Title',
          required: true,
        },
        validation: {
          messages: {
            required: 'You need to provide a title!'
          }
        }
      },
      {
        key: 'description',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Description',
          placeholder: 'Description',
          required: true,
        },
        validation: {
          messages: {
            required: 'You need to provide a description!'
          }
        }
      },
    ];
  }
}
