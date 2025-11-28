# Jiraclone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




### folder structure 
src/
└── app/
    ├── app.component.ts         # The Root (contains only <router-outlet>)
    ├── app.config.ts            # Application Config (Providers, Routes)
    ├── app.routes.ts            # Main Routing Table
    │
    ├── core/                    # SINGLETONS (Loaded once)
    │   ├── models/              # Interfaces (task.model.ts, user.model.ts)
    │   ├── services/            # Global State
    │   │   ├── task.service.ts  # The Signal Store logic
    │   │   └── mock-api.service.ts # Simulates backend latency
    │   ├── interceptors/        # Error handling & Auth simulation
    │   └── utils/               # Helper functions (date formatting, uuid generator)
    │
    ├── shared/                  # DUMB COMPONENTS (UI Library)
    │   ├── components/
    │   │   ├── ui-button/       # Standalone Component
    │   │   ├── ui-card/         # Standalone Component
    │   │   ├── ui-badge/        # For Priority/Status labels
    │   │   └── ui-avatar/       # User profile circle
    │   ├── directives/          # e.g., ClickOutsideDirective
    │   └── pipes/               # e.g., TimeAgoPipe
    │
    └── features/                # SMART COMPONENTS (Business Logic)
        ├── kanban-board/        # The Main View
        │   ├── board.component.ts     # Orchestrates columns
        │   ├── components/
        │   │   ├── board-column/      # A single lane (Todo/Done)
        │   │   └── board-card/        # The drag-drop item
        │
        └── task-details/        # The Edit/Create Modal
            └── task-form.component.ts # Reactive Form logic