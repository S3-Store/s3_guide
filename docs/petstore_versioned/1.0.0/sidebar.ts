import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "petstore_versioned/1.0.0/swagger-petstore-yaml",
    },
    {
      type: "category",
      label: "Pets",
      link: {
        type: "doc",
        id: "petstore_versioned/1.0.0/pet",
      },
      items: [
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/add-pet",
          label: "Add a new pet to the store",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/update-pet",
          label: "Update an existing pet",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/get-pet-by-id",
          label: "Find pet by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/update-pet-with-form",
          label: "Updates a pet in the store with form data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/delete-pet",
          label: "Deletes a pet",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/upload-file",
          label: "uploads an image",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/find-pets-by-status",
          label: "Finds Pets by status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/find-pets-by-tags",
          label: "Finds Pets by tags",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/new-pet",
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
        id: "petstore_versioned/1.0.0/store",
      },
      items: [
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/get-inventory",
          label: "Returns pet inventories by status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/place-order",
          label: "Place an order for a pet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/get-order-by-id",
          label: "Find purchase order by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/delete-order",
          label: "Delete purchase order by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/subscribe-to-the-store-events",
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
        id: "petstore_versioned/1.0.0/user",
      },
      items: [
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/create-user",
          label: "Create user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/get-user-by-name",
          label: "Get user by user name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/update-user",
          label: "Updated user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/delete-user",
          label: "Delete user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/create-users-with-array-input",
          label: "Creates list of users with given input array",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/create-users-with-list-input",
          label: "Creates list of users with given input list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/login-user",
          label: "Logs user into the system",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore_versioned/1.0.0/logout-user",
          label: "Logs out current logged in user session",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
