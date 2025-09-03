// the component interface which the leaf and composite nodes implement. 
export interface IFileSystemComponent {
    show(indent?: string): void;
}
