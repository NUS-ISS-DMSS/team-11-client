package com.nusteam11.team11.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Spaces {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private String address;
    private String operate_hour_st;
    private String operate_hour_et;
    private String days_closed;
    private String contact_num;
    private String station;
    private String image;

    public Spaces() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getOperate_hour_st() {
        return operate_hour_st;
    }

    public void setOperate_hour_st(String operate_hour_st) {
        this.operate_hour_st = operate_hour_st;
    }

    public String getOperate_hour_et() {
        return operate_hour_et;
    }

    public void setOperate_hour_et(String operate_hour_et) {
        this.operate_hour_et = operate_hour_et;
    }

    public String getDays_closed() {
        return days_closed;
    }

    public void setDays_closed(String days_closed) {
        this.days_closed = days_closed;
    }

    public String getContact_num() {
        return contact_num;
    }

    public void setContact_num(String contact_num) {
        this.contact_num = contact_num;
    }

    public String getStation() {
        return station;
    }

    public void setStation(String station) {
        this.station = station;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
