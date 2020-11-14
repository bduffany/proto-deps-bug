load("@npm//@bazel/labs:index.bzl", "protobufjs_ts_library")
load("@rules_proto//proto:defs.bzl", "proto_library")

package(default_visibility = ["//visibility:public"])

proto_library(
    name = "car_proto",
    srcs = ["car.proto"],
)

protobufjs_ts_library(
    name = "car_ts_proto",
    deps = [":car_proto"],
)
