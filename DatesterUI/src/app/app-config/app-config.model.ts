export interface IAppConfig {
    env: {
        name: string;
    };
    apiServer: {
        RegisterUserUrl: string;
        LoginUserUrl: string;
        UploadImageUrl: string;
    };
    cloudinary: {
        CloudName: string;
        ApiKey: string;
        ApiSecret: string;
        EnvironmentVariable: string;
    };
}