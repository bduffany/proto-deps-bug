load("@npm//@bazel/typescript:index.bzl", "ts_devserver", "ts_library")

ts_library(
    name = "app",
    srcs = ["app.ts"],
    deps = ["@pb_ws//:car_ts_proto"],
)

ts_devserver(
    name = "devserver",
    entry_module = "app_ws/app",
    serving_path = "/bundle.js",
    static_files = [":index.html"],
    deps = [":app"],
)
