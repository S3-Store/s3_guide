import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "petstore_versioned/swagger-petstore-yaml",
    },
    {
      type: "category",
      label: "Pets",
      link: {
        type: "doc",
        id: "petstore_versioned/pet",
      },
      items: [
        {
          type: "doc",
          id: "petstore_versioned/schemas/cat",
          label: "Cat",
          className: "schema",
        },
        {
          type: "doc",
          id: "petstore_versioned/add-pet",
          label: "Add a new pet to the store",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/update-pet",
          label: "Update an existing pet",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "petstore_versioned/get-pet-by-id",
          label: "Find pet by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/update-pet-with-form",
          label: "Updates a pet in the store with form data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/delete-pet",
          label: "Deletes a pet",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "petstore_versioned/upload-file",
          label: "uploads an image",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/find-pets-by-status",
          label: "Finds Pets by status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/find-pets-by-tags",
          label: "Finds Pets by tags",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/new-pet",
          label: "New pet",
          className: "api-method event",
        },
      ],
    },
    {
      type: "category",
      label: "Petstore Orders",
      link: {
        type: "doc",
        id: "petstore_versioned/store",
      },
      items: [
        {
          type: "doc",
          id: "petstore_versioned/get-inventory",
          label: "Returns pet inventories by status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/place-order",
          label: "Place an order for a pet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/get-order-by-id",
          label: "Find purchase order by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/delete-order",
          label: "Delete purchase order by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "petstore_versioned/subscribe-to-the-store-events",
          label: "Subscribe to the Store events",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      link: {
        type: "doc",
        id: "petstore_versioned/user",
      },
      items: [
        {
          type: "doc",
          id: "petstore_versioned/create-user",
          label: "Create user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/get-user-by-name",
          label: "Get user by user name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/update-user",
          label: "Updated user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "petstore_versioned/delete-user",
          label: "Delete user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "petstore_versioned/create-users-with-array-input",
          label: "Creates list of users with given input array",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/create-users-with-list-input",
          label: "Creates list of users with given input list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/login-user",
          label: "Logs user into the system",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/logout-user",
          label: "Logs out current logged in user session",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
