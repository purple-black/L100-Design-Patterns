// the component interface which the leaf and composite nodes implement. 
export interface FileSystemComponent {
    show(indent?: string): void;
}
